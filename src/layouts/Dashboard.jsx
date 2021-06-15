import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <GridColumn width={12}>
            <ProductList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
