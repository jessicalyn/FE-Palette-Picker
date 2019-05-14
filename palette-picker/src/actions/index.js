export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const storeProjects = (projects) => ({
  type: 'STORE_PROJECTS',
  projects
})

export const storeColors = (colors) => ({
  type: 'STORE_COLORS',
  colors
})

export const addProject = (newProject) => ({
  type: 'ADD_PROJECT',
  newProject
})

export const addPalette = (newPalette) => ({
  type: 'ADD_PALETTE',
  newPalette
})