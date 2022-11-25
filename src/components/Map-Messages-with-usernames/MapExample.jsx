import React from 'react'

const messages = [
    {
      id: "message-1",
      text: "Hey folks!",
      userId: "user-1"
    },
    {
      id: "message-2",
      text: "Hi",
      userId: "user-2"
    },
    {
      id: "message-3",
      text: "How are you?",
      userId: "user-1"
    },
    {
      id: "message-4",
      text: "How was the week.",
      userId: "user-1"
    },
    {
      id: "message-5",
      text: "I'm fine",
      userId: "user-1"
    },
    {
      id: "message-6",
      text: "Great!",
      userId: "user-3"
    }
  ];
  
  const users = [
    {
      id: "user-1",
      name: "Paul"
    },
    {
      id: "user-2",
      name: "Lisa"
    },
    {
      id: "user-3",
      name: "Marc"
    }
  ];

const mapExample = () => {
    const namesById = new Map(users.map(({id, name}) => [id, name]))
    // Alternatively we can use reduce()
    // const namesById = users.reduce( (prev, user) => ({ ...prev, [user.id]: user.name }), {} )
    // And then, use namesById[userId] for reduce() instead of namesById.get(userId) for Map()
  return messages.map(({ id, text, userId }) => (
    <div key={id}>
        <div>{text}</div>
        <div>{namesById.get(userId)}</div>
    </div>
  )) 
}

export default mapExample