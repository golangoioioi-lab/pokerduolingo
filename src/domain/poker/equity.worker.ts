import { calcEquity, type EquityRequest } from './equity';

self.onmessage = (e: MessageEvent<EquityRequest>) => {
  const result = calcEquity(e.data, (partial) => self.postMessage({ done: false, result: partial }));
  self.postMessage({ done: true, result });
};
