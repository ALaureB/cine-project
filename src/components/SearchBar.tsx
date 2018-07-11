import * as React from "react";

interface ISearchBarState {
    placeHolder: string;
    searchText: string;
}

class SearchBar extends React.Component<{}, ISearchBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            placeHolder : "Search for a movie...",
            // tslint:disable-next-line:trailing-comma
            searchText: ""
        };
    }

    public handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            searchText: e.currentTarget.value
        });
    }

    public render() {
        return <input placeholder={this.state.placeHolder} onChange={this.handleChange.bind(this)}/>;
    }
}

export default SearchBar;
