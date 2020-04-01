interface RecurlyError extends Error {
  code: string;
  message: string;
  classification: string;
  help?: string;
}

export default RecurlyError;
