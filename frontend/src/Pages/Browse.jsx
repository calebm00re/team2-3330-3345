import '../Styles/Home.css';
import '../Styles/Browse.css'
import 'react-pro-sidebar/dist/css/styles.css';
import EventCard, { EventPage } from './EventViews'
import React from 'react'

export const BrowseMenu = (props) =>
    <>
        <div className="browse-controls">
            {/* <input type="text">Search bar</input> */}
            <h1>filter button</h1>
            <h1>filter button</h1>
        </div>
    </>

class BrowsePage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            showPage: false,
            selectedPageIndex: 0
        }
    }

    showSelectedPage (pageClickedIndex) {
        console.log(pageClickedIndex);
        this.setState( { showPage: true, selectedPageIndex: pageClickedIndex} );
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        
                    { 
                        this.state.showPage && <EventPage selectedPageIndex={this.state.selectedPageIndex} /> 
                    }
                    {
                        !this.state.showPage && <>
                        <BrowseMenu />
                        <div className="browse-grid">
                            {
                                [1,2,3,4,5,6,7,8].map(x => (<EventCard key={x} index={x}  onCardClick={ x => this.showSelectedPage(x) } />))
                            }
                        </div>
                        </>
                    }
                        
                    </div>
                </section>
            </>
        );
    }
}

export default BrowsePage;