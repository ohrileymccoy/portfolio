import { onRequestGet as __api_v1_getProject_ts_onRequestGet } from "C:\\Users\\User\\Desktop\\Portfolio\\functions\\api\\v1\\getProject.ts"
import { onRequestGet as __api_v1_github_ts_onRequestGet } from "C:\\Users\\User\\Desktop\\Portfolio\\functions\\api\\v1\\github.ts"
import { onRequestGet as __api_v1_listProjects_ts_onRequestGet } from "C:\\Users\\User\\Desktop\\Portfolio\\functions\\api\\v1\\listProjects.ts"

export const routes = [
    {
      routePath: "/api/v1/getProject",
      mountPath: "/api/v1",
      method: "GET",
      middlewares: [],
      modules: [__api_v1_getProject_ts_onRequestGet],
    },
  {
      routePath: "/api/v1/github",
      mountPath: "/api/v1",
      method: "GET",
      middlewares: [],
      modules: [__api_v1_github_ts_onRequestGet],
    },
  {
      routePath: "/api/v1/listProjects",
      mountPath: "/api/v1",
      method: "GET",
      middlewares: [],
      modules: [__api_v1_listProjects_ts_onRequestGet],
    },
  ]