let blogconfig = {
  bloglist: [
    {
      title: 'PROTOTYPES',
      pageid: 'p'
    },
    {
      title: 'RESISTORS',
      pageid: 'r'
    },
    {
      title: 'ATHENA',
      pageid: 'a'
    },
    {
      title: 'OMEGA',
      pageid: 'o'
    },
    {
      title: 'GOATS',
      pageid: 'g'
    }
  ],
  p: {
    main: 'https://evhsroboticsblog.firebaseio.com',
    postList: 'postList',
    posts: 'posts',
    currentYear: 'currentYear'
  },
  g: {
    main: 'https://goatsblogftc.firebaseio.com', 
    postList: 'postList',
    posts: 'posts',
    currentYear: 'currentYear'
  },
  r: {
    main: 'https://resistorsblogftc.firebaseio.com',
    postList: 'postList',
    posts: 'posts',
    currentYear: 'currentYear'
  }
};

export {
  blogconfig
};
