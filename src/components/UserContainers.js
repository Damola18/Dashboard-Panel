import {React, useEffect, useState} from "react";
import axios from "axios";
import { TEST_API_URL } from "../config";

// export default function UserContainers() {
//     const [results, setresults] = useState("");

//     const getAllResults = () => {
//         axios.get(TEST_API_URL)
//         .then((response) => {
//             const allResults = response.data
//             console.log(allResults)
//         })
//         .catch((error) => {
//             console.error(`Error: ${error}`)
//         })
//     }
// }

