declare module '#auth-utils' {
  interface User {
    githubId: string
    name: string
    username: string
    avatar: string
  }

  interface UserSession {
    // Add your own fields
  }
}

export {}
