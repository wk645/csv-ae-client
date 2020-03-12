const getIsProcessing = (state) => state.uploads.isProcessing;
const getDidProcess = (state) => state.uploads.didProcess;
const getProcessedCSV = (state) => state.uploads.processedCSV;

export default {
    getIsProcessing,
    getDidProcess,
    getProcessedCSV
};
