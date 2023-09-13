import React from 'react';

// Time to execute our TRACKS query from React! To do that, we'll use Apollo Client's useQuery hook in src/pages/tracks. js . 
// The useQuery React hook is the primary API for executing queries in an Apollo application. 

// Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, VIEW_USERS } from "./Queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

function App() {
  const getAllUsers = useQuery(GET_USERS);
  const userInfo = useQuery(VIEW_USERS, { variables: { id: 3 }});
  if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
  if (getAllUsers.error || userInfo.error) return <>Error :(</>;

  return (
    <div className="container">
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
          <pre>
            {JSON.stringify(getAllUsers.data)}
          </pre>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a user by id</CardSubtitle>
          <pre>
            {JSON.stringify(userInfo.data)}
          </pre>
        </CardBody>
      </Card>
    </div>
  )
}

export default App;
