import { faker } from "@faker-js/faker";
import { useState } from "react";

function ButtonAddingNotifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    setNotifications((previous) => {
      return previous.concat(`${faker.name.firstName()} joined!`);
    });
    // eslint-disable-next-line no-undef
    setTimeout(() => setNotifications((previous) => previous.slice(1)), 1000);
  };

  return (
    <div>
      <button onClick={() => addNotification()}>
        Invite User To Community
      </button>

      <aside>
        {notifications.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </aside>
    </div>
  );
}

export default ButtonAddingNotifications;
