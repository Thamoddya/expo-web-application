import BaseUrl from "./AppSettings";
export default class APIClient {
  private constructor() {}

  static async sendRequest(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    endpoint: string,
    requestModel: any = null
  ) {
    try {
      const url = `${BaseUrl}${endpoint}`;
      const accessToken = localStorage.getItem("access_token");
      const userAgent = `WebClient/${navigator.userAgent}`;
      let options: any = {};

      // Build request options
      if (accessToken !== null) {
        options = {
          method,
          headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
            Authorization: `Bearer ${accessToken}`,
          },
          ...(requestModel && { body: JSON.stringify(requestModel) }),
        };
      } else {
        options = {
          method,
          headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
          },
          ...(requestModel && { body: JSON.stringify(requestModel) }),
        };
      }

      // Debug mode for development
      if (process.env.NODE_ENV === "development") {
        console.debug("🛠 REQUEST INFO 🛠");
        console.debug("🔵 URL: " + url);
        console.debug("🔵 METHOD: " + options.method);
        Object.entries(options.headers).forEach(([key, value]) =>
          console.debug("🔵 HEADER:", `${key}: ${value}`)
        );
        if (requestModel) console.debug("🔵 BODY:", options.body);
        console.debug("🛠 ============ 🛠");
      }

      // Send the request
      const response = await fetch(url, options);

      if (response.ok) {
        console.debug("🟢 SUCCESS:", method, endpoint);
      } else {
        console.debug(
          "🔴 FAILURE:",
          method,
          endpoint,
          "🔗 STATUS CODE: " + response.status
        );
      }

      return response;
    } catch (error: any) {
      console.error("🔴 ERROR:", error.message);
      throw new Error(error.message);
    }
  }
}
