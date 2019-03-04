import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

const pStyle = {
    "text-align": "center",
    "font-size": "150%",
    "color": "red",
    "letter-spacing": "3px"
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: [],
            errorMsg: ""
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ bookInput: e.target.value })
    }

    handleSearchClick(e) {
        e.preventDefault();
        if (this.state.bookInput.length > 0) {
            API.searchBooks(this.state.bookInput)
                .then(
                    (response) => {
                        if (response.data.length > 0) {
                            this.setState({ bookData: response.data });
                            this.setState({ bookInput: "" });
                            this.setState({ errorMsg: "" })
                        } else {
                            this.setState({ errorMsg: "No Search Results Found. Please verify the input you have entered." })
                        }
                    }
                );
        } else {
            this.setState({ errorMsg: "Please enter the book title to display Books" })
        }
    }

    render() {
        return (
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0) ?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path} /> : null
                }
                <p style={pStyle}>{this.state.errorMsg}</p>
            </main>
        );
    }
}

export default Search;