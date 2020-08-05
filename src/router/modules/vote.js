const vote = {
  path: '/pollapp',
  component: () => import('@/components/common/DefaultLayout.vue'),
  children: [
    {
      path: 'vote',
      name: 'VotePage',
      component: () => import('@/views/VotePage.vue'),
      meta: {
        routes: [
          { breadcrumbName: '투표 목록', to: { name: 'PollListPage' } },
          { breadcrumbName: '투표 하기' },
        ],
      },
    },
  ],
};

export default vote;
