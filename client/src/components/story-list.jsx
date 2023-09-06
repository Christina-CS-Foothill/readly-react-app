var StoryList = () => {

  var stories = [
    { 'title': 'The Lion, The Witch and The Potato', 'author': 'Christina Hunter', 'dateCreated': new Date() },
    { 'title': 'Harold Potts', 'author': 'Yvonne Thompson', 'dateCreated': new Date() },
    { 'title': 'The Lord of the Necklaces', 'author': 'Carter Ashford', 'dateCreated': new Date() },
    { 'title': 'A Tale of Two Breadsticks', 'author': 'Michael Johnson', 'dateCreated': new Date() },
    { 'title': 'Crime and Onions', 'author': 'Reese Nospoon', 'dateCreated': new Date() },
    { 'title': 'Splash', 'author': 'Nicole Cunningham', 'dateCreated': new Date() },
  ];

  return (
    <div>
      <h2>Story List 📖</h2>
      <ul>
        {stories.map((story, index) => {
          return (
            <li key={index}>
              <h4>{story['title']}</h4>
              <p>Author: {story['author']}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default StoryList;