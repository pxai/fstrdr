import React, { Component, ComponentChildren } from 'react';
import { Redirect } from 'react-router-dom';
import { SafeAreaView } from 'react-native';
import Header from './header';
import Footer from './footer';

export interface PageProps {
    restricted?: boolean
    matches?: {
        layout: string
    }
}

export default class Page extends Component<PageProps, {}> {
    private normalizedChildren (): any[] {
        const { children } = this.props;
        return (Array.isArray(children))
            ? children
            : [children];
    }

    public render (): ComponentChildren {
        const { restricted, matches } = this.props;
        if (restricted && true) {
            return <Redirect to="/" />;
        }

        return (<SafeAreaView>
          {this.normalizedChildren().map(child => {
              return child;
          })}
          <Footer />
          </SafeAreaView>)
    }
}
