import React, { Component } from "react";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class Articles extends Component {
  state = {
    articles: [],
    search: ""
  };

  componentDidMount() {
    this.searchArticle("shrek");
  }


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchArticle = query => {
    API.search(query)
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state.search);
    console.log(this.state.articles)
  };

  handleOnClick = () => {
     console.log("beep")
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="search"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        placeholder="Search for Articles"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <h1>New York Times Articles:</h1>
            <RecipeList>
            {this.state.articles.map(article => (
          <RecipeListItem
            key={article.headline.main}
            title={article.headline.main}
            href={article.web_url}
            summary={article.snippet}
            handleOnClick={this.handleOnClick}
          />
        ))}
            </RecipeList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } 
}

export default Articles;
