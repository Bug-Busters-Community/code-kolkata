import Clarity from "@microsoft/clarity";

/**
 * Initializes Microsoft Clarity with the project ID configured in Vite environment variables.
 * @param {string} [id] - Optional project ID override. Defaults to import.meta.env.VITE_CLARITY_PROJECT_ID.
 */
export const initClarity = (id) => {
  const projectId = id || import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!projectId) {
    if (import.meta.env.DEV) {
      console.warn(
        "Microsoft Clarity Project ID is not configured. Set VITE_CLARITY_PROJECT_ID in your .env file."
      );
    }
    return;
  }

  try {
    Clarity.init(projectId);
  } catch (error) {
    console.error("Failed to initialize Microsoft Clarity:", error);
  }
};

export { Clarity };
export default Clarity;
