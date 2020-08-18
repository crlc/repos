const topics = [
  { id: "zero", name: "Getting Started" },
  { id: "one", name: "MERN W9D5 - W10D3" },
  { id: "two", name: "JavaScript W10D3 - W11D1" },
  { id: "three", name: "Technical Intro W11D1" },
  { id: "four", name: "Stacks / Queues & Binary Search W11D2" },
  { id: "five", name: "Trees & Binary Search Trees W11D3" },
  { id: "six", name: "Linked Lists W11D4" },
  { id: "seven", name: "Graphs & Heaps W11D5" },
  { id: "eight", name: "Written Presence W12D1" },
  { id: "nine", name: "Behavioral Interviewing W12D2" },
  { id: "ten", name: "Networking W12D3" },
  { id: "eleven", name: "Negotiations W12D4" },
  { id: "twelve", name: "System Design" },
  { id: "thirteen", name: "Additional Tech Topics" }
];

const subtopics = [
  { id: "none", name: "NOSUBTOPIC" },
  { id: "lecture", name: "Lecture" },
  { id: "exercise", name: "Exercise" },
  { id: "solution", name: "Solution" },
  { id: "project", name: "Project" },
  { id: "intro_to_trees", name: "Intro to Trees" },
  { id: "tree_traversal", name: "Tree Order Traversals" },
  { id: "depth_breadth", name: "Depth and Breadth First" },
  { id: "heap_sort", name: "Heap Sort" }
];

const types = {
  reading: "Reading",
  quiz: "Quiz",
  codingProblem: "CodingProblem",
  project: "Project",
  assessment: "Assessment",
  externalResource: "ExternalResource",
  video: "Video"
};

const courses = {
  courses: {
    live: {
      taskGroupId: "c5d1a297-2098-465b-b4ab-34d81d552570",
      name: "Full Stack In Person - Job Search",
      urls: ["full-stack-in-person-job-search"],
      track: "Full Stack In Person",
      order: 10,
      topics: topics,
      subtopics: subtopics
    },
    open: {
      taskGroupId: "80e0da58-14e8-4382-ad7c-7d3553bb9100",
      name: "Full Stack Online - Job Search",
      urls: ["full-stack-online-job-search"],
      track: "Full Stack Online",
      order: 10,
      topics: topics,
      subtopics: subtopics
    }
  },
  tasks: [
    {
      name: "Job Search Module Overview",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "73417340-d98d-4d07-a18a-d9be987d9f17",
      topicId: "zero",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "job-search-overview.md"
    },
    {
      name: "Flex Project",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "b552ca62-98b7-434a-8944-abc224cec5bb",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/flex-project.md"
    },
    {
      name: "Git Workflow",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "9fb10510-87a3-4cce-8add-fc39ed0a556a",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/git-workflow.md"
    },
    {
      name: "Git Workflow Demo",
      timeEstimate: "00:07:06",
      type: "Video",
      id: "7d7d1abd-9f5f-4ab3-b7c0-7be442a8ff62",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307877521"
    },
    {
      name: "Resolving Git Conflicts",
      timeEstimate: "00:04:24",
      type: "Video",
      id: "1b60c48d-b15c-4f6f-a4f8-aa9de89db168",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307881018"
    },
    {
      name: "MERN Stack Setup",
      timeEstimate: "0:20:00",
      type: "Reading",
      id: "49c18449-674b-4adf-a7b0-1c870ef8012f",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/getting-started.md"
    },
    {
      name: "Express Routing",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "a4d97576-9447-4f23-8951-f52fb1e6587b",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/express-routing.md"
    },
    {
      name: "Folder Setup",
      timeEstimate: "00:03:09",
      type: "Video",
      id: "76fa993e-d87e-4ba3-8735-7bee71a2f49e",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307755376"
    },
    {
      name: "Initial Route",
      timeEstimate: "00:04:38",
      type: "Video",
      id: "c024c866-08de-4d4b-9881-d6a659e6a8ff",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307756037"
    },
    {
      name: "Nodemon",
      timeEstimate: "00:04:34",
      type: "Video",
      id: "2a013f52-d55d-4472-b0ee-ce95081d5186",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307758184"
    },
    {
      name: "mLab Setup",
      timeEstimate: "00:03:09",
      type: "Video",
      id: "4fca5aab-84e8-4801-9337-3fc92abdfebc",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307801281"
    },
    {
      name: "Secret or Key",
      timeEstimate: "00:03:09",
      type: "Video",
      id: "19b182b7-e89c-486e-a717-83cefbc218ed",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307755026"
    },
    {
      name: "Connecting to MongoDB",
      timeEstimate: "00:03:17",
      type: "Video",
      id: "f8cc4e60-4cc3-4389-9675-e67c82d1514b",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307753965"
    },
    {
      name: "Debugging Node",
      timeEstimate: "00:04:04",
      type: "Video",
      id: "38da504a-c951-4438-8320-349d1567c76b",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307801117"
    },
    {
      name: "Router",
      timeEstimate: "00:07:30",
      type: "Video",
      id: "1cf38bfa-1cee-4472-8203-548479a6eed9",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307754534"
    },
    {
      name: "Mongoose Models",
      timeEstimate: "00:45:00",
      type: "Reading",
      id: "62bd6a34-b780-4b83-9bcc-61eeebcbebce",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/mongoose-models.md"
    },
    {
      name: "User Registration",
      timeEstimate: "00:04:00",
      type: "Reading",
      id: "ddbeb32b-f46e-4538-a681-eeb41fdf8a76",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/user-registration.md"
    },
    {
      name: "Login Functionality",
      timeEstimate: "00:03:00",
      type: "Reading",
      id: "ab111b6f-07aa-4a50-a69b-9c621b98db8f",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/login-functionality.md"
    },
    {
      name: "Passport Setup",
      timeEstimate: "00:07:00",
      type: "Reading",
      id: "f623074a-1375-4c2f-b34e-bdfa7ceba6c3",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/passport.md"
    },
    {
      name: "User Model",
      timeEstimate: "00:07:13",
      type: "Video",
      id: "b22ac1a2-9c57-4223-9a6e-b087b5986a31",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307757190"
    },
    {
      name: "Registration",
      timeEstimate: "00:08:32",
      type: "Video",
      id: "55e0d0e9-cc39-4e0d-bec6-575790f22c18",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307810048"
    },
    {
      name: "BCrypt",
      timeEstimate: "00:06:31",
      type: "Video",
      id: "c1690944-2dee-4435-bd9c-6daebf7b58fe",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307809841"
    },
    {
      name: "Passport Configuration",
      timeEstimate: "00:06:20",
      type: "Video",
      id: "7afdf1e4-24b7-49bd-b1a7-926ca220c8e7",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307803130"
    },
    {
      name: "Login Route Setup",
      timeEstimate: "00:07:54",
      type: "Video",
      id: "bec2ae25-6090-4741-a7be-835bce7d1b7f",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307812514"
    },
    {
      name: "Using Secret or Key",
      timeEstimate: "00:02:57",
      type: "Video",
      id: "28e3d815-c686-4579-bbd8-bc17103f8054",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307801598"
    },
    {
      name: "Create JWT",
      timeEstimate: "00:04:37",
      type: "Video",
      id: "09bd3ee6-90a9-4796-8785-9a7e9c071fe1",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307801388"
    },
    {
      name: "Validations Reading",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "e502f2f0-525b-45bb-8683-1e3069a372e2",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/validations.md"
    },
    {
      name: "Validations 1",
      timeEstimate: "00:02:46",
      type: "Video",
      id: "9cda364f-84b4-47d1-896d-a5194a709e82",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307769516"
    },
    {
      name: "Validations 2",
      timeEstimate: "00:06:35",
      type: "Video",
      id: "5f34534f-6679-4210-9fab-cefc8a63c380",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307770579"
    },
    {
      name: "Validations 3",
      timeEstimate: "00:09:23",
      type: "Video",
      id: "6dbc0047-cd95-49e9-96ee-4c69f2b02cdf",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307771921"
    },
    {
      name: "Validations 4",
      timeEstimate: "00:05:31",
      type: "Video",
      id: "047298c6-2819-4ba9-97ab-b22496896b58",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307778172"
    },
    {
      name: "Validations 5",
      timeEstimate: "00:03:50",
      type: "Video",
      id: "8ec5a564-ea61-4628-86a5-ba16b10d0491",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307779824"
    },
    {
      name: "Tweets Reading",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "78ccce86-b1b4-402b-92a6-d900d73dc998",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/tweets.md"
    },
    {
      name: "Tweets 1",
      timeEstimate: "00:03:57",
      type: "Video",
      id: "0fef7f94-d6ca-47b5-8080-f916f3ec8568",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307801755"
    },
    {
      name: "Tweets 2",
      timeEstimate: "00:06:23",
      type: "Video",
      id: "4efbffd1-76f2-4ac0-8c7e-0f4c8ddd6e50",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307802279"
    },
    {
      name: "Tweets 3",
      timeEstimate: "00:08:06",
      type: "Video",
      id: "847fa72f-68be-4fce-80b2-e7f1dba975e3",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307803197"
    },
    {
      name: "Tweets 4",
      timeEstimate: "00:11:36",
      type: "Video",
      id: "1ecf40e4-5b30-4c91-8af5-62aa74a820a1",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307804898"
    },
    {
      name: "React Setup",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "a6429e71-4e31-4721-aab8-663f92bdb7e1",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/react-setup.md"
    },
    {
      name: "Frontend Auth",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "690fd004-15d0-41d0-8143-74effa11f547",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/frontend-auth.md"
    },
    {
      name: "React 1",
      timeEstimate: "00:08:12",
      type: "Video",
      id: "e15f1c54-b41b-465c-9eb5-1e0bfd10b3b0",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307791079"
    },
    {
      name: "React 2",
      timeEstimate: "00:07:55",
      type: "Video",
      id: "f013e4e1-9fe7-4eb0-916f-4a1a2617b0d7",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307885449"
    },
    {
      name: "React 3",
      timeEstimate: "00:10:32",
      type: "Video",
      id: "20bc4029-bd3d-4d9e-b040-0cec02abd7e3",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307794076"
    },
    {
      name: "React 4",
      timeEstimate: "00:04:13",
      type: "Video",
      id: "53c71f45-9a8c-47c8-8635-ba7009136a6b",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307873875"
    },
    {
      name: "React 5",
      timeEstimate: "00:07:35",
      type: "Video",
      id: "a515a5ef-3eaa-4132-9169-4142c04bc68e",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307808343"
    },
    {
      name: "React 6",
      timeEstimate: "00:05:37",
      type: "Video",
      id: "06bcdc29-6267-49c9-8816-f1f82ff24be9",
      topicId: "one",
      subtopicId: "none",
      href: "https://player.vimeo.com/video/307796338"
    },
    {
      name: "Frontend Tweets",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "0a610e67-6ee7-4a91-ade5-be4b96c1a139",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/frontend-wrapup.md"
    },
    {
      name: "Heroku Deployment",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "5f29d177-81da-424e-a7c5-5ca3b528a25b",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/flex-project/mern-stack/heroku.md"
    },
    {
      name: "Production README",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "405af18e-0a90-4661-9f71-63191368f6a3",
      topicId: "one",
      subtopicId: "none",
      repo: "curriculum",
      path: "full-stack-project/project/production-readme.md"
    },
    {
      name: "Open Source Movement",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "0a5d6590-68fd-4669-85ba-23e2267cf0cf",
      topicId: "one",
      subtopicId: "none",
      repo: "sf-job-search-curriculum",
      path: "projects/other-projects/open-source.md"
    },
    {
      name: "JS Project Introduction",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/js-project-overview.md",
      type: "Reading",
      id: "208250ff-6ce7-4b53-999a-5c80b25a5e97",
      topicId: "two",
      subtopicId: "none",
      timeEstimate: "00:05:00"
    },
    {
      name: "JS Project Proposal",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/proposal-draft.md",
      type: "Reading",
      id: "661f4be2-201d-4082-9ef5-7138c070ce75",
      topicId: "two",
      subtopicId: "none",
      timeEstimate: "00:02:00"
    },
    {
      name: "JS Project Sample Proposal",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/js-sample-proposal1.md",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "2cfc07d4-1c71-4f51-aa17-211e32a157f9",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Object Oriented JS",
      href: "https://player.vimeo.com/video/169806088",
      timeEstimate: "00:15:00",
      type: "Video",
      id: "039a023b-ed34-4db8-b182-434f11c96c48",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: This",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/review/this.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "fe8fb043-1f2d-45c9-b4d5-698f3e9734b3",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Prototypal Inheritance",
      href: "https://player.vimeo.com/video/162131042",
      timeEstimate: "00:21:00",
      type: "Video",
      id: "6a37970e-9774-4c11-bd24-8fb420ae215b",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Browser Modules",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/review/browser-modules.md",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "2e20548e-6946-4da8-80af-9bc277aea2cd",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Event Propagation",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/review/event-propagation.md",
      timeEstimate: "00:05:00",
      type: "Reading",
      id: "51758c0c-b004-4423-83f6-447985141b30",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Intro to Canvas",
      href: "https://joshondesign.com/p/books/canvasdeepdive/chapter01.html",
      timeEstimate: "01:00:00",
      type: "ExternalResource",
      id: "32338956-a7a1-4891-b933-53e2340781f8",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Canvas Sprites",
      href: "http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/",
      timeEstimate: "00:40:00",
      type: "ExternalResource",
      id: "88f9f6c3-1014-4dfd-8812-b0892139cef7",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Intro to Webpack",
      href: "https://webpack.js.org/guides/getting-started/",
      timeEstimate: "00:25:00",
      type: "ExternalResource",
      id: "ead366da-5aa4-4c52-b3d8-cae3349536cc",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "NPM, Yarn, Babel, Webpack",
      href: "https://medium.com/front-end-hacking/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987",
      timeEstimate: "00:10:00",
      type: "ExternalResource",
      id: "d82c3344-f077-4c40-bf7b-1520692628e5",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Snake Solution",
      href: "https://github.com/appacademy/curriculum/tree/master/javascript/projects/snake/solution",
      timeEstimate: "00:15:00",
      type: "ExternalResource",
      id: "8e98ab76-f3e8-45a1-b5e4-810cfa4a6648",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Review: Asteroids Solutions",
      href: "https://github.com/appacademy/curriculum/tree/master/javascript/projects/asteroids",
      timeEstimate: "00:30:00",
      type: "ExternalResource",
      id: "959d355e-2f07-44e0-825f-01af7b043ac4",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "requestAnimationFrame",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/readings/request-animation-frame.md",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "966bb15e-5c5b-4655-9387-6f6d038fd6fd",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Web Audio API",
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API",
      timeEstimate: "00:30:00",
      type: "ExternalResource",
      id: "e92b677f-a582-432d-90df-51ccd1ebb849",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Data Visualization Projects",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/readings/data-visualization.md",
      timeEstimate: "03:00:00",
      type: "Reading",
      id: "e0b9b81a-4ba2-4306-8730-fc2519293793",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Host a Live Project on Github Pages",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/gh-pages-live.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "597d4106-d87b-4787-8d8a-578f1cd6a030",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Custom Github Pages Domain",
      repo: "sf-job-search-curriculum",
      path: "projects/js-project/gh-pages-custom-domain.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "476c5b4f-4056-48a3-a434-9a21b33519a3",
      topicId: "two",
      subtopicId: "none"
    },
    {
      name: "Big O Motivation",
      type: "Video",
      id: "9b3309fb-32bb-4d08-826a-166242211115",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175565088"
    },
    {
      name: "RAM Model of Computation",
      type: "Video",
      href: "https://player.vimeo.com/video/175565090",
      id: "08ab95f7-b99a-4712-8b20-f82ebb535b1e",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00"
    },
    {
      name: "Asymptotic Analysis",
      type: "Video",
      id: "465d3455-7010-4d69-966d-607da17dcd1f",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175565086"
    },
    {
      name: "The Worst Case",
      type: "Video",
      id: "94f5e159-224a-4a7d-9cb6-5146428ee35a",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175565094"
    },
    {
      name: "Common Classifications",
      type: "Video",
      id: "b5c52911-eb76-4221-ba6e-a6cd4870bc9e",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175568501"
    },
    {
      name: "Set Definition",
      type: "Video",
      id: "c21bd518-26ba-4686-8e97-2aa5f00d637c",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175568481"
    },
    {
      name: "Space Complexity",
      type: "Video",
      id: "e271336f-700d-432e-acf1-d99c42e21835",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/175565092"
    },
    {
      name: "Big O Recap",
      type: "Reading",
      id: "7f5628fe-59f1-4ea6-b52e-e0a768538896",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/reading.md"
    },
    {
      name: "Big O Missing Number",
      type: "Reading",
      id: "2b153763-9b71-4bb9-9e58-7a09d9e0c215",
      topicId: "three",
      subtopicId: "exercise",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/exercise.md"
    },
    {
      name: "Big O Missing Number Solution",
      type: "Reading",
      id: "814b32a6-7287-4249-99ef-10da3f10dc43",
      topicId: "three",
      subtopicId: "solution",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/solution.md"
    },
    {
      name: "Big O Time Difference",
      type: "Reading",
      id: "d68fcefd-c8ab-4b12-b084-6e035f6f997e",
      topicId: "three",
      subtopicId: "exercise",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/exercise2.md"
    },
    {
      name: "Big O Time Difference Solution",
      type: "Reading",
      id: "1f511351-e066-4f33-8a07-ae68d0454e16",
      topicId: "three",
      subtopicId: "solution",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/solution2.md"
    },
    {
      name: "Big O Is Shuffle",
      type: "Reading",
      id: "24ed5271-4406-4443-94df-1c4f854ca4ff",
      topicId: "three",
      subtopicId: "exercise",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/exercise3.md"
    },
    {
      name: "Big O Is Shuffle Solution",
      type: "Reading",
      id: "ab4348d6-ea67-4b5d-aa61-16afd70e1fd9",
      topicId: "three",
      subtopicId: "solution",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/solution3.md"
    },
    {
      name: "Big O Bonus",
      type: "Reading",
      id: "2ce16577-3860-4f47-bcd1-635cb607f2f0",
      topicId: "three",
      subtopicId: "exercise",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/exercise_bonus.md"
    },
    {
      name: "Big O Bonus Solution",
      type: "Reading",
      id: "787dbbfd-fe37-4d57-b679-b089e54f9dbc",
      topicId: "three",
      subtopicId: "solution",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/solution_bonus.md"
    },
    {
      name: "Big O Extras",
      type: "Reading",
      id: "c1c6e89a-6660-4b8d-8639-7be1bfe121a8",
      topicId: "three",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "eip-online",
      path: "fundamentals/big_o_notation/extras.md"
    },
    {
      name: "Job Search Etiquette",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/job-search-etiquette.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "c8bc795b-2022-41a9-9647-d9fc9200f1f8",
      topicId: "four",
      subtopicId: "none"
    },
    {
      name: "Advice",
      repo: "sf-job-search-curriculum",
      path: "applying/mihir-job-search-advice.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "da25231f-ed7f-475d-ac0e-c83435debc1b",
      topicId: "four",
      subtopicId: "none"
    },
    {
      name: "Stacks and Queues Notes",
      type: "Reading",
      id: "f79d59a5-4da1-4bfb-b67e-56c008f86634",
      topicId: "four",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/stacks_and_queues/stacks_and_queues_notes_reading.md"
    },
    {
      name: "Stack Project",
      type: "Project",
      id: "98ded7fb-6fe6-40a2-8911-d305e164992a",
      topicId: "four",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/stacks_and_queues/projects/stack_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/stack_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/stack_project_solution.zip"
    },
    {
      name: "Queue Project",
      type: "Project",
      id: "2fd283e7-6b56-4820-877c-813002e8a72c",
      topicId: "four",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/stacks_and_queues/projects/queue_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/queue_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/queue_project_solution.zip"
    },
    {
      name: "Stack Queue Interview Problems",
      type: "Project",
      id: "b04662a4-391c-4c7c-bb7f-89caf7696116",
      topicId: "four",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/stacks_and_queues/projects/stack_queue_interview_problems_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/stack_queue_interview_problems.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/stacks_and_queues/projects/stack_queue_interview_problems_solution.zip"
    },
    {
      name: "Binary Trees Notes",
      type: "Reading",
      id: "151382cc-a491-4d2e-bfd8-c57ee7b65809",
      topicId: "five",
      subtopicId: "intro_to_trees",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/trees/binary_trees_notes_reading.md"
    },
    {
      name: "Binary Tree Lecture",
      type: "Video",
      id: "a24d4a6c-0a9c-4993-acbc-23fcf06cda2d",
      topicId: "five",
      subtopicId: "intro_to_trees",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/311392811"
    },
    {
      name: "Inorder Preorder Postorder Notes",
      type: "Reading",
      id: "efab9c8b-ab4d-451e-85e9-322c4c04ad30",
      topicId: "five",
      subtopicId: "tree_traversal",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/trees/inorder_preorder_postorder_reading.md"
    },
    {
      name: "Inorder Preorder Postorder Lecture",
      type: "Video",
      id: "e3fffd4d-9196-46ca-a85e-8534b6ab5cbd",
      topicId: "five",
      subtopicId: "tree_traversal",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/311392696"
    },
    {
      name: "Tree Order Project",
      type: "Project",
      id: "29e5014a-12ee-4c62-8175-eb0ef808c0b8",
      topicId: "five",
      subtopicId: "tree_traversal",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/trees/projects/tree_order_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/projects/tree_order_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/projects/tree_order_project_solution.zip"
    },
    {
      name: "Tree Order Project Walkthrough",
      type: "Video",
      id: "ef094feb-d748-47eb-83ab-1cf01cd2d677",
      topicId: "five",
      subtopicId: "tree_traversal",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/311613274"
    },
    {
      name: "Depth and Breadth First Notes",
      type: "Reading",
      id: "a5d1100d-b8c4-45d6-b879-0bf9ac702b3f",
      topicId: "five",
      subtopicId: "depth_breadth",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/trees/depth_and_breadth_first_notes_reading.md"
    },
    {
      name: "Depth and Breadth First Lecture",
      type: "Video",
      id: "b837d2e5-6bc9-4b8c-b97d-ae50451c438b",
      topicId: "five",
      subtopicId: "depth_breadth",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/311923268"
    },
    {
      name: "Depth Breadth First Project",
      type: "Project",
      id: "8a7206d0-b753-4546-ad6a-ed5ca62c2dc2",
      topicId: "five",
      subtopicId: "depth_breadth",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/trees/projects/depth_breadth_first_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/projects/depth_breadth_first_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/projects/depth_breadth_first_project_solution.zip"
    },
    {
      name: "Depth Breadth First Project Walkthrough",
      type: "Video",
      id: "0b594360-bf57-4736-b6dd-7883bbbd0f80",
      topicId: "five",
      subtopicId: "depth_breadth",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/312174397"
    },
    {
      name: "Binary Search Tree Notes",
      type: "Reading",
      id: "911d8fb2-1720-4958-9224-f462e8f12f44",
      topicId: "five",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/binary_search_trees/binary_search_tree_notes_reading.md"
    },
    {
      name: "Binary Search Tree Lecture",
      type: "Video",
      id: "fc1476a9-e9b7-4022-9533-aed73c53476c",
      topicId: "five",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/312326182"
    },
    {
      name: "Binary Search and Balance Notes",
      type: "Reading",
      id: "c0578ccb-2f05-4e26-8e2b-1158083afdac",
      topicId: "five",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/binary_search_trees/balanced_bst_notes_reading.md"
    },
    {
      name: "Binary Search and Balance Lecture",
      type: "Video",
      id: "30e33b2e-269b-45d8-9a29-d2a63d4ca34f",
      topicId: "five",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/312450437"
    },
    {
      name: "BST Project",
      type: "Project",
      id: "1f4f1edd-3ba7-4597-bbd6-96e3f6e67000",
      topicId: "five",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/binary_search_trees/projects/bst_project/bst_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/binary_search_trees/projects/bst_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/binary_search_trees/projects/bst_project_solution.zip"
    },
    {
      name: "BST Project Walkthrough",
      type: "Video",
      id: "06ef6bdc-6976-49b7-b031-a7efcb74e6f2",
      topicId: "five",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/312450535"
    },
    {
      name: "Linked List Notes",
      type: "Reading",
      id: "19662fc4-93a2-4039-b697-91c7b34cb2d9",
      topicId: "six",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/linked_list/linked_list_notes_reading.md"
    },
    {
      name: "Linked List Project",
      type: "Project",
      id: "64257cf7-21c8-4f11-aa66-cd4e54cc4e76",
      topicId: "six",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/linked_list/projects/linked_list_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/linked_lists/projects/linked_list_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/linked_lists/projects/linked_list_project_solution.zip"
    },
    {
      name: "Linked List Interview Problems",
      type: "Project",
      id: "20ac5c96-7011-4777-a864-a8348400a37c",
      topicId: "six",
      subtopicId: "none",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/linked_list/projects/linked_list_interview_problems_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/linked_lists/projects/linked_list_interview_problems.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/linked_lists/projects/linked_list_interview_problems_solution.zip"
    },
    {
      name: "Graph Notes",
      type: "Reading",
      id: "50175c3e-8e06-4076-bfd2-56a3ff7a7460",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/graphs/graph_notes_reading.md"
    },
    {
      name: "Graph Traversal Notes",
      type: "Reading",
      id: "3410963f-c7a9-4761-980c-a4de941cf09c",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/graphs/graph_traversal_notes_reading.md"
    },
    {
      name: "Graph Lecture",
      type: "Video",
      id: "66031c7e-636d-4394-a91b-5fa47c84c2ee",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313079714"
    },
    {
      name: "Graph Project",
      type: "Project",
      id: "3b4bbe53-5b9a-4850-bbc6-76d72610b9ab",
      topicId: "seven",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/graphs/projects/graph_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/projects/graph_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/projects/graph_project_solution.zip"
    },
    {
      name: "Graph Project Walkthrough Part 1",
      type: "Video",
      id: "584089b8-9608-4792-8cea-7ca2c7586e3e",
      topicId: "seven",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313111776"
    },
    {
      name: "Graph Project Walkthrough Part 2",
      type: "Video",
      id: "9ad738a7-a73a-47a9-a30b-9b9b84c7204c",
      topicId: "seven",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313112172"
    },
    {
      name: "Heaps Notes",
      type: "Reading",
      id: "0da84b69-b477-4d28-992c-8ebcf8a3b2b8",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/heaps/heaps_notes_reading.md"
    },
    {
      name: "Heaps Lecture",
      type: "Video",
      id: "c8fd87bf-ec66-4029-8327-1404c17fa8c9",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313316074"
    },
    {
      name: "Heaps Implementation Notes",
      type: "Reading",
      id: "db76fb97-bd44-4af9-aa1f-bbe95fde9f84",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/heaps/heaps_implementation_notes_reading.md"
    },
    {
      name: "Heaps Implementation Lecture",
      type: "Video",
      id: "d2ded9bc-447b-42d1-b7aa-9171dce66baa",
      topicId: "seven",
      subtopicId: "lecture",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313326185"
    },
    {
      name: "Heaps Project",
      type: "Project",
      id: "b8f2d9c9-c27e-4736-a341-384828858486",
      topicId: "seven",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/heaps/projects/heaps_project_assessment.md",
      download: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/projects/heaps_project.zip",
      solution: "https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/projects/heaps_project_solution.zip"
    },
    {
      name: "Heaps Project Walkthrough",
      type: "Video",
      id: "4070f85e-bbd1-4533-9072-863d016e8bf7",
      topicId: "seven",
      subtopicId: "project",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313560775"
    },
    {
      name: "Heap Sort Notes",
      type: "Reading",
      id: "577c7ce2-76d2-44cc-83e9-866fa349c7a8",
      topicId: "seven",
      subtopicId: "heap_sort",
      timeEstimate: "00:00:00",
      repo: "data_structures_and_algorithms",
      path: "topics/heaps/heap_sort_notes_reading.md"
    },
    {
      name: "Heap Sort Lecture",
      type: "Video",
      id: "85ca630c-4d5b-4fb5-9275-6262f1b1b1ce",
      topicId: "seven",
      subtopicId: "heap_sort",
      timeEstimate: "00:00:00",
      href: "https://player.vimeo.com/video/313745663"
    },
    {
      name: "Resume - Crafting Your Resume",
      repo: "sf-job-search-curriculum",
      path: "application-materials/resume/resume.md",
      timeEstimate: "07:00:00",
      type: "Reading",
      id: "91758041-c959-4645-b397-d2beb00a2bb1",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Resume - Verbs",
      repo: "sf-job-search-curriculum",
      path: "application-materials/resume/resume-verbs.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "5fd107a5-4136-418a-9945-851c87e5863a",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Resume - Keywords",
      repo: "sf-job-search-curriculum",
      path: "application-materials/resume/resume-keywords.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "2fe0d32a-ba7e-4d49-85c7-bfac7a7c51a5",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Resume - Bullets",
      repo: "sf-job-search-curriculum",
      path: "application-materials/resume/crafting-your-bullets.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "2b72c212-9c64-4d72-8e49-09169ca7b6ec",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Resume - Score Card",
      repo: "sf-job-search-curriculum",
      path: "application-materials/resume/ScoreCard.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "18aaa778-5761-4d60-89b5-693b2873fb6b",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "AngelList",
      repo: "sf-job-search-curriculum",
      path: "application-materials/angellist/angellist.md",
      timeEstimate: "02:30:00",
      type: "Reading",
      id: "cb79286c-13fb-46e8-817d-114f093892ba",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "LinkedIn",
      repo: "sf-job-search-curriculum",
      path: "application-materials/linkedin/linkedin.md",
      timeEstimate: "02:30:00",
      type: "Reading",
      id: "dc5f3981-a654-4d6f-83d3-947a87bb1d65",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Github",
      repo: "sf-job-search-curriculum",
      path: "application-materials/github/github.md",
      timeEstimate: "03:00:00",
      type: "Reading",
      id: "4c91e832-3e25-4358-af38-7c763b74b4b2",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Social Media Checklist",
      repo: "sf-job-search-curriculum",
      path: "application-materials/social-media-checklist/Social-Media-Checklist.md",
      timeEstimate: "03:00:00",
      type: "Reading",
      id: "777c05f7-2857-47e7-acc6-be9dcf530bb6",
      topicId: "eight",
      subtopicId: "none"
    },
    {
      name: "Personal Pitch",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/interviewing/personal-pitch.md",
      timeEstimate: "02:30:00",
      type: "Reading",
      id: "2ddff3c1-bb10-4278-a049-366c9ad52004",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Personal Pitch Uploading Instructions",
      repo: "sf-job-search-curriculum",
      path: "meta/app-academy/uploading-personal-pitch-video.md",
      timeEstimate: "02:30:00",
      type: "Reading",
      id: "60366005-6785-4630-aaf0-b8b98237f8f0",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Applying Approaches",
      repo: "sf-job-search-curriculum",
      path: "application-materials/Applying_Approaches.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "a06d1121-83dd-4686-b520-353874c2de45",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Job Boards",
      repo: "sf-job-search-curriculum",
      path: "applying/job-boards.md",
      timeEstimate: "00:15:00",
      type: "Reading",
      id: "1f5a5052-5fdb-44b1-a105-0917bad9520c",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Interviewing - Asking Questions",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/interviewing/asking-questions.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "ac7c9826-7ca4-4246-9c47-f7a6df8bc550",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Advanced Tips",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/advanced-tips.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "f0af255a-e323-491d-b51c-eae06386f121",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Interviewing - Behavioral Questions",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/interviewing/behavioral-questions.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "4e5b191e-4606-47e7-889c-9996bab14f7a",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Cover Letter",
      repo: "sf-job-search-curriculum",
      path: "application-materials/cover-letter/cover-letter.md",
      timeEstimate: "03:00:00",
      type: "Reading",
      id: "99a93dbc-bb3d-4cf3-9121-13e76e0a397d",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Sample Cover Letters",
      repo: "sf-job-search-curriculum",
      path: "application-materials/Sample-Cover-Letters.md",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "ce680731-0db3-42ac-bb34-5512fe3703bf",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Portfolio Site",
      repo: "sf-job-search-curriculum",
      path: "application-materials/portfolio/portfolio.md",
      timeEstimate: "06:00:00",
      type: "Reading",
      id: "d98ec8bb-05f3-4929-959d-d471d1e9b688",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Google Analytics - Reading",
      repo: "sf-job-search-curriculum",
      path: "projects/google-analytics/google-analytics-reading.md",
      timeEstimate: "06:00:00",
      type: "Reading",
      id: "6a264578-37c8-4907-9546-46717709ccf5",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Google Analytics - SparkNotes",
      repo: "sf-job-search-curriculum",
      path: "projects/google-analytics/google-analytics-sparknotes.md",
      timeEstimate: "06:00:00",
      type: "Reading",
      id: "a2c6814d-e65a-402c-8c6b-2b0a597582bb",
      topicId: "nine",
      subtopicId: "none"
    },
    {
      name: "Networking",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/networking/networking.md",
      timeEstimate: "00:45:00",
      type: "Reading",
      id: "1d420e1c-fab6-4508-8877-a104e559a7b6",
      topicId: "ten",
      subtopicId: "none"
    },
    {
      name: "Negotiating - Email Negotiations",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/negotiating/email-negotiations.md",
      timeEstimate: "00:30:00",
      type: "Reading",
      id: "9401a163-51bb-41e3-814e-7ba75f95a515",
      topicId: "eleven",
      subtopicId: "none"
    },
    {
      name: "Negotiating - Equity",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/negotiating/equity.md",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "0e1f1d3c-400e-491e-8571-817284eaf490",
      topicId: "eleven",
      subtopicId: "none"
    },
    {
      name: "Negotiating - Pay Talk",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/negotiating/pay-talk.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "5656e686-b62e-486c-9df6-95811dafec8d",
      topicId: "eleven",
      subtopicId: "none"
    },
    {
      name: "Negotiating - Salary Data",
      repo: "sf-job-search-curriculum",
      path: "soft-skills/negotiating/salary-data.md",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "80c18ff2-8d58-4181-a112-571e17488655",
      topicId: "eleven",
      subtopicId: "none"
    },
    {
      name: "Introduction",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/system-design/introduction.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "f766a936-c49f-4c12-9ee9-033db230d866",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "Web Architecture 1",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/system-design/architecture-1.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "97f553aa-f594-4d33-9209-b5ae56ed901a",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "Web Architecture 2",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/system-design/architecture-2.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "ed257ec9-b674-4f13-b849-adb88dd6fc0c",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "Web Architecture 3",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/system-design/architecture-3.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "9ddd9d6e-b618-4612-a0d2-99efc9fd9323",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "Performance Optimization Cheat Sheet",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/system-design/performance-cheat-sheet.md",
      timeEstimate: "00:25:00",
      type: "Reading",
      id: "2acd48b1-0514-450a-a814-35a2f0a500d8",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "What Happens When You Navigate to google.com",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/technical-questions/http-request.md",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "0eb7e55e-05a5-4c7b-8ac6-85ce82313f84",
      topicId: "twelve",
      subtopicId: "none"
    },
    {
      name: "Tutorials",
      repo: "sf-job-search-curriculum",
      path: "tutorials/README.md",
      timeEstimate: "00:45:00",
      type: "Reading",
      id: "8a232bb0-8210-430e-bc75-b628c8a94ad9",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "Finding Problems",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/finding-problems.md",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "5b08af54-4e6e-450d-b230-21be53916d16",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "Mock Phone Screen",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/phone_screen/README.md",
      timeEstimate: "00:45:00",
      type: "Reading",
      id: "d4ece433-8953-486e-a30b-c3c758be3f99",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "Whiteboarding Videos - Max Sum to Leaf",
      href: "https://player.vimeo.com/video/256648012",
      timeEstimate: "00:59:00",
      type: "Video",
      id: "2ff9d488-9a0a-496f-8d06-6e19e05483f0",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "Whiteboarding Tips",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/whiteboarding/tips.md",
      timeEstimate: "00:20:00",
      type: "Reading",
      id: "d18b9056-d158-4dc6-977b-fa9245baf721",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "Handling Ambiguous Questions",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/technical-questions/tips.md",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "c4233dec-4a4b-4e93-bffe-0d5921bdadd8",
      topicId: "thirteen",
      subtopicId: "none"
    },
    {
      name: "What Software Engineers Do",
      repo: "sf-job-search-curriculum",
      path: "technical-skills/engineering-culture/what-do-software-engineers-do.md",
      timeEstimate: "00:10:00",
      type: "Reading",
      id: "9ff64d60-b12b-47d3-ab3b-0b298eb3a59e",
      topicId: "thirteen",
      subtopicId: "none"
    }
  ]
};

module.exports = courses;
