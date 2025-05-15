export const BASE_URL = 'http://localhost:8002';

export const URLS = {
    workspaces: '/workspaces',
    defaultOverview: '/default/overview',
    gatewayServices: '/default/services',
    plugins: '/default/plugins',
    consumers: '/default/consumers',
    routes: '/default/routes',

    getFullUrl:(path:string)=>`${BASE_URL}${path}`,
};

export const SidebarMenu = {
    Workspaces: 'Workspaces',
    Overview: 'Overview',
    GatewayServices: 'Gateway Services',
    Routes: 'Routes',
    Consumers: 'Consumers',
    Plugins: 'Plugins',
    RedisConfigurations: 'Redis Configurations',
    Upstreams: 'Upstreams',
    Certificates: 'Certificates',
    SNIs: 'SNIs',
    Keys: 'Keys',
    Vaults: 'Vaults',
}

export const DashboardItem = {
    Services: 'services',
    Routes: 'routes',
    Consumers: 'consumers',
    Plugins: 'plugins',
}