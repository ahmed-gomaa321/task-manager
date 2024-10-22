export enum ROUTES {
    MAIN = '/',
    REGISTER = 'register',
    LOGIN = 'login',
    FORGET_PASSWORD = 'forgetPassword',
    DASHBOARD_LAYOUT = '/dashboardLayout',
    DASHBOARD = '/dashboardLayout/dashboard',
    PROJECTS_LIST = '/dashboardLayout/projectsList',
    SINGLE_PROJECT = '/dashboardLayout/projectsList/:projectId',
    TASKS_LIST = '/dashboardLayout/tasksList',
    TASKS_DETAILS = '/dashboardLayout/tasksList/:taskId',
    TEAM_MEMBER = '/dashboardLayout/teamMember',
    PROFILE = '/dashboardLayout/profile',
} 