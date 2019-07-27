import { graphql, useStaticQuery } from 'gatsby';

export const sortByFolderOrder = ({ allPloneContainer, allPloneDocument }) => {
  const { ploneSite } = useStaticQuery(graphql`
    query SortNodesByFolderOrderQuery {
      ploneSite {
        id
        items {
          _id
        }
      }
    }
  `);
  let ids = ploneSite.items.map(item => item._id);
  for (const folder of allPloneContainer.edges) {
    let idx = ids.indexOf(folder.node.id);
    if (idx !== -1) {
      for (const item of folder.node.items) {
        ids.splice(idx + 1, 0, item._id);
        idx = idx + 1;
      }
    } else {
      for (const item of folder.node.items) {
        ids.push(item._id);
      }
    }
  }
  allPloneContainer.edges.sort(
    (a, b) => ids.indexOf(a.node.id) - ids.indexOf(b.node.id)
  );
  if (allPloneDocument) {
    allPloneDocument.edges.sort(
      (a, b) => ids.indexOf(a.node.id) - ids.indexOf(b.node.id)
    );
  }
};
