import { axios } from "@/utils/axios";

export function getAgentList(params) {
  return axios({
    url: 'manage/agentUsers',
    method: 'GET',
    params
  })
}