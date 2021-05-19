// API baseada na movieAPI.js do projeto Movie Card Library CRUD

const initialData = {};

if (!localStorage.evaluations) {
  localStorage.setItem('evaluations', JSON.stringify(initialData));
}

const readEvaluations = () => JSON.parse(localStorage.getItem('evaluations'));
const saveEvaluations = (evaluations) => localStorage.setItem(
  'evaluations', JSON.stringify(evaluations),
);

const TIMEOUT = 1000;
const SUCCESS_STATUS = 'OK';

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getEvaluations = (productID) => (
  new Promise((resolve) => {
    const evaluations = readEvaluations();
    if (!evaluations[productID]) {
      simulateRequest([])(resolve);
    } else {
      simulateRequest(evaluations[productID])(resolve);
    }
  })
);

export const createEvaluation = (productID, evaluationData) => (
  new Promise((resolve) => {
    const evaluations = readEvaluations();
    const newEvaluation = { ...evaluationData };
    if (!evaluations[productID]) {
      evaluations[productID] = [newEvaluation];
    } else {
      evaluations[productID] = [...evaluations[productID], newEvaluation];
    }
    saveEvaluations(evaluations);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);
