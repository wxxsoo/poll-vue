const poll = {
  path: '/wansoo',
  component: () => import('@/components/common/DefaultLayout.vue'),
  children: [
    {
      path: 'polls',
      name: 'PollListPage',
      component: () => import('@/views/PollListPage.vue'),
      meta: {
        routes: [{ breadcrumbName: 'Home' }],
      },
    },
    {
      path: 'polls/:id',
      name: 'PollDetailPage',
      component: () => import('@/views/PollDetailPage.vue'),
      meta: {
        routes: [
          { breadcrumbName: 'Home', to: { name: 'PollListPage' } },
          { breadcrumbName: '투표 상세' },
        ],
      },
    },
  ],
};

export default poll;
