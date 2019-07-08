import minimist from 'minimist';
import Table from 'cli-table';
import { launchChromeAndRunLighthouse, getScoreByCategory, buildRow, getExitCode } from './utils';

process.on('unhandledRejection', reason => {
  console.error(reason.stack || reason);
  process.exit(1);
});

(async() => {
  const args = minimist(process.argv.slice(2));
  const resultTable = new Table({});
  const {
    performance: performanceThreshold,
    accessibility: accessibilityThreshold,
    'best-practices': bestPracticesThreshold,
    seo: seoThreshold,
    pwa: pwaThreshold,
    _: [target]
  } = args;

  const result = await launchChromeAndRunLighthouse(target, {
    chromeFlags: ['--headless'],
    onlyCategories: [
      performanceThreshold && 'performance',
      accessibilityThreshold && 'accessibility',
      bestPracticesThreshold && 'best-practices',
      seoThreshold && 'seo',
      pwaThreshold && 'pwa'
    ]
  });

  const performanceScore = getScoreByCategory(result, 'performance');
  const accessibilityScore = getScoreByCategory(result, 'accessibility');
  const bestPracticesScore = getScoreByCategory(result, 'best-practices');
  const seoScore = getScoreByCategory(result, 'seo');
  const pwaScore = getScoreByCategory(result, 'pwa');

  resultTable.push(['Category', 'Threshold', 'Score', 'Status']);
  resultTable.push(buildRow('Performance', performanceThreshold, performanceScore));
  resultTable.push(buildRow('Accessibility', accessibilityThreshold, accessibilityScore));
  resultTable.push(buildRow('Best Practices', bestPracticesThreshold, bestPracticesScore));
  resultTable.push(buildRow('SEO', seoThreshold, seoScore));
  resultTable.push(buildRow('PWA', pwaThreshold, pwaScore));

  console.log(resultTable.toString());

  const exitCode = getExitCode({
    performanceThreshold, performanceScore,
    accessibilityThreshold, accessibilityScore,
    bestPracticesThreshold, bestPracticesScore,
    seoThreshold, seoScore,
    pwaThreshold, pwaScore
  });

  process.exit(exitCode);
})();
