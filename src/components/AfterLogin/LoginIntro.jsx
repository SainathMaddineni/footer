import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Form from "./Form"
function LoginIntro() {
        return ( 
            <ChakraProvider>
                <Navbar />
                <Form />
            </ChakraProvider>
         );
    }
 
export default LoginIntro ;