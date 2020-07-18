export function fetchRequestsStart() {
  return { type: "FETCH_POSTS_REQUEST" };
}

export function fetchRequestsError() {
  return { type: "FETCH_POSTS_FAILURE", error: "Something went wrong." };
}

export function fetchSuccess(data) {
  return { type: "FETCH_POSTS_SUCCESS", response: data };
}
