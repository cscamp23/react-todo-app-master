import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';

export default function Footer(props) {
    const {PendingItemCount, filter, changeFilter} = props;
    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...props}/>
            </div>
            <div className="pull-left">
                {`${PendingItemCount} items left`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter}}/>
            </div>
        </footer>
    );
}
