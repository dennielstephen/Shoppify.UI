import React from "react";
import ResponsiveAppBar from "../components/common/ResponsiveAppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ItemCard from "../components/common/ItemCard";
import { Stack } from "@mui/material";
import CheatSheet from "./cheatsheet";
import ReduxToolkitDemo from "./reduxToolkitDemo";

export default function Dashboard() {
    return (
        <Container>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Paper elevation={3} sx={{ mt: 10, height: "800px" }}>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                </Stack>
                <CheatSheet></CheatSheet>
                <ReduxToolkitDemo></ReduxToolkitDemo>
            </Paper>
        </Container>
    );
}
