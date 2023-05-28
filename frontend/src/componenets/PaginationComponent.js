import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PaginationComponent = ({
    searchQuery,
    paginationLinksNumber,
    pageNum,
  }) => {
    const search = searchQuery ? `search/${searchQuery}/` : "";
    const url = `/medicine/${search}`;
  
    return (
      <Pagination>
        <LinkContainer to={`${url}${pageNum - 1}`}>
          <Pagination.Prev disabled={pageNum === 1} />
        </LinkContainer>
        {[...Array(paginationLinksNumber).keys()].map((x) => (
          <LinkContainer key={x + 1} to={`${url}${x + 1}`}>
            <Pagination.Item active={x + 1 === pageNum}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
        <LinkContainer
          to={`${url}${pageNum + 1}`}
          disabled={pageNum === paginationLinksNumber}
        >
          <Pagination.Next />
        </LinkContainer>
      </Pagination>
    );
  };

export default PaginationComponent;

