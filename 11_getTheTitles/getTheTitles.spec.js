const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      },
      {
        title: 'Book3',
        author: 'Name2'
      },
      {
        title: 'Book4',
        author: 'Name2'
      },
      {
        title: 'Book5',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2','Book3','Book4','Book5']);
  });
});
