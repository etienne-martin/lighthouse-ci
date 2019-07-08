import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import * as colors from 'colors/safe';

const FAIL = 'FAIL';
const PASS = 'PASS';
const SKIP = 'SKIP';

export const launchChromeAndRunLighthouse = async (url, opts, config = null) => {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr);
    });
  });
};

export const getScoreByCategory = (result, category) => result.categories[category] && result.categories[category].score * 100;

const getStatus = (threshold, score) => {
  if (!threshold) return SKIP;

  return score < threshold ? FAIL : PASS;
};

export const buildRow = (category, threshold, score) => {
  if (!threshold) return [
    category,
    '---------',
    '-----',
    `[${SKIP}]`
  ];

  const status = getStatus(threshold, score);
  const cell = status === PASS ? colors.green : colors.red;

  return [
    cell(category),
    cell(threshold),
    cell(score),
    cell(`[${status}]`)
  ];
};

export const getExitCode = ({
  performanceThreshold,
  performanceScore,
  accessibilityThreshold,
  accessibilityScore,
  bestPracticesThreshold,
  bestPracticesScore,
  seoThreshold,
  seoScore,
  pwaThreshold,
  pwaScore
}) => {
  return [
    getStatus(performanceThreshold, performanceScore),
    getStatus(accessibilityThreshold, accessibilityScore),
    getStatus(bestPracticesThreshold, bestPracticesScore),
    getStatus(seoThreshold, seoScore),
    getStatus(pwaThreshold, pwaScore)
  ].includes(FAIL) ? 1 : 0;
};
