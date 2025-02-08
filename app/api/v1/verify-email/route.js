import { verifyToken } from "@lib/user";

export async function POST(request) {
  try {
    const url = new URL(request.url); // Parse the request URL
    const token = url.searchParams.get("token"); // Extract the token from query parameters

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: "Token is required" }),
        { status: 400 }
      );
    }

    // Verify the token
    const isValidToken = await verifyToken(token); // Replace with your actual token verification logic

    if (!isValidToken) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid or expired token" }),
        { status: 401 }
      );
    }

    // Token is valid; handle success response
    return new Response(
      JSON.stringify({ success: true, message: "Token verified successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error verifying token:", JSON.stringify(error));
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error verifying token",
        statusCode: 500,
      }),
      { status: 500 }
    );
  }
}
