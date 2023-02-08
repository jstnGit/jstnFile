import { createContext, useState, useEffect } from "react";
import axios from "axios";

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {

    useEffect(() => {
        fetchHomeData()
        fetchSkillsData()
        fetchArtsData()
        fetchAbout()
    }, [])

    const [isLoading, setIsLoading] = useState(true)
    const [homeContent, setHomeContent] = useState([])
    const [skillsContent, setSkillsContent] = useState([])
    const [artDesignsContent, setArtDesignsContent] = useState([])
    const [aboutContent, setAboutContent]  = useState([])

    const fetchHomeData = async () => {
        try {
            await axios.get('http://localhost:8081/home')
                .then(res => {
                    console.log(res.data[0])
                    setHomeContent(res.data[0])
                })
        } catch (err){
            console.error(err);
        }
    }

    const fetchSkillsData = async () => {
        try {
            await axios.get('http://localhost:8081/skills')
                .then(res => {
                    console.log(res.data)
                    setSkillsContent(res.data)
                })
        } catch (err) {
            console.error(err);
        }
    }

    const fetchArtsData = async () => {
        try {
            await axios.get('http://localhost:8081/arts')
                .then(res => {
                    setArtDesignsContent(res.data)
                    console.log(res.data)
                })
        } catch (err) {
            console.error(err);
        } finally {
            
        }
    }

    const fetchAbout = async () => {
        try {
            await axios.get('http://localhost:8081/about')
                .then(res => {
                    setAboutContent(res.data)
                    console.log(res.data)
                })
        } catch (err) {
            console.error(err);
        } finally {
            
        }
    }

    return <HomeContext.Provider value={
        {
            homeContent,
            skillsContent,
            artDesignsContent,
            isLoading,
            aboutContent,
        }
    }>
        {children}
    </HomeContext.Provider>
}

export default HomeContext