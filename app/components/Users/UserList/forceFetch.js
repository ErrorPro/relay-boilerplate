import RelayStore from 'react-relay/lib/RelayStore';
import RelayQuery from 'react-relay/lib/RelayQuery';
import Relay from 'react-relay';

export default () => {
  RelayStore.forceFetch(
    {
      statusRequest: new RelayQuery.Root(
        Relay.QL`
          query {
            viewer {
              users(first: 100) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        `,
        {},
        {}
      ),
    },
    () => {}
  );
}
