// 给action注册事件处理函数，当这个函数被触发时候，将状态提交到mutations中处理
export function modifyAName ({commit}, name) {
  return commit('modifyAName', name)
}

// export function modifyBName ({commit}, name) {
//   return commit('modifyBName', name)
// }

export const modifyBName = ({ commit }, name) => commit('modifyBName', name)
