export const state = () => ({
  // categories
  categories: [
    {
      name: 'Cheap Talk',
      description: '写程序以前, 他是个诗人',
      alias: 'cheap-talk',
    },
    {
      name: 'Stereotyped',
      description: '有趣的八股文',
      alias: 'stereotyped',
    },
    {
      name: '那些杀不死我的',
      description:
        "记录了一些, 偶尔迫不得已而探索的一些过时、冷门或无趣的技术, 很显然用了尼大师的典, 「What Doesn't Kill You Makes You Stronger」",
      alias: 'what-doesnt-kill-you',
    },
    {
      name: '军体拳',
      description: '天下绝学千千万, 军体神拳只此般',
      alias: 'basic-skill',
    },
    {
      name: 'Boring Plans',
      description: '一些 Pet Projects 的开发日志',
      alias: 'boring-plans',
    },
    {
      name: 'AC!AC!AC!',
      description: '主要是 LeetCode 刷题',
      alias: 'accepted',
    },
    {
      name: 'Quick Start',
      description: '快速了解',
      alias: 'quick-start',
    },
    {
      name: '掉落',
      description: '比如丘丘胶、蝙蝠翅膀、禽肉等等',
      alias: 'assorted-harvest',
    },
  ],
  // apps
  apps: [
    {
      name: '2048',
      to: '/boring-plans/2020-001',
    },
  ],
  404: ['4', '9', '13', '14', '16', '24'],
  error: ['32', '25'],
  // certain post
  post: null,
  lastPost: null,
  nextPost: null,
  // snackbar
  snackbar: false,
  snackbarText: '',
  // starred feedback
  starredFeedbackArr: [
    `You've already starred!`,
    `U've already starred : )`,
    `Stop! Stop your repeatedly boring behavior!`,
    'Waahoo!',
  ],
})

export const mutations = {
  SET_POST(state, payload) {
    state.post = payload
  },
  SET_LAST_POST(state, payload) {
    state.lastPost = payload
  },
  SET_NEXT_POST(state, payload) {
    state.nextPost = payload
  },
  SET_SNACKBAR(state, payload) {
    state.snackbar = payload
  },
  SET_SNACKBAR_TEXT(state, payload) {
    state.snackbarText = payload
  },
}

export const actions = {
  notify({ commit }, notification) {
    commit('SET_SNACKBAR', true)
    commit('SET_SNACKBAR_TEXT', notification)

    setTimeout(() => {
      commit('SET_SNACKBAR', false)
    }, 2000)
  },
}
