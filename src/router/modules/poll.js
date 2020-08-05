const poll = {
  path: '/pollapp',
  component: () => import('@/components/common/DefaultLayout.vue'),
  children: [
    {
      path: 'polls',
      name: 'PollListPage',
      component: () => import('@/views/PollListPage.vue'),
      meta: {
        routes: [{ breadcrumbName: '투표 목록' }],
      },
    },
    {
      path: 'polls/:id',
      name: 'PollDetailPage',
      component: () => import('@/views/PollDetailPage.vue'),
      meta: {
        routes: [
          { breadcrumbName: '투표 목록', to: { name: 'PollListPage' } },
          { breadcrumbName: '투표 상세' },
        ],
      },
    },
    {
      path: 'create',
      name: 'PollCreatePage',
      component: () => import('@/views/PollCreatePage.vue'),
      meta: {
        routes: [
          { breadcrumbName: '투표 목록', to: { name: 'PollListPage' } },
          { breadcrumbName: '투표 생성' },
        ],
      },
    },
  ],
};

export default poll;
