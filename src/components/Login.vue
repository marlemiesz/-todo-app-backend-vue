<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex>
                <v-form>
                    <v-card class="elevantion-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Login form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                    name="login"
                                    label="Login"
                                    type="text"
                            />

                            <v-text-field
                                    name="password"
                                    label="Password"
                                    type="password"
                            />
                        </v-card-text>
                        <v-divider light/>
                        <v-card-actions>
                            <v-btn rounded dark color="indigo">
                                Sign in
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" dark rounded>
                                Login
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'login'
    }
</script>