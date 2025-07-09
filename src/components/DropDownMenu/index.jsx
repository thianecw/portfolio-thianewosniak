import { List } from "phosphor-react"
import { TableCenter, DropDown, DropDownButton, DropDownMenuBox, DropDownItems } from "./styles"
import { useEffect, useRef, useState } from "react"

export function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const dropDownRef = useRef(null)

    const toggleMenu = () => setIsOpen(!isOpen);
    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen &&
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target) &&
                window.innerWidth <= 768
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => {

            document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    return (

        <TableCenter>
            <DropDown ref={dropDownRef}>
                <DropDownButton onClick={toggleMenu}> <List size={30} color="#eeeeee" weight="regular" style={{ right: 0 }} /> </DropDownButton>

                <DropDownMenuBox isOpen={isOpen}>
                    <DropDownItems>
                        <a href="#home">sobre mim</a>
                        <a href="#skills">skills</a>
                        <a href="#projects">projetos</a>
                        <a href="#contact">contato</a>
                    </DropDownItems>
                </DropDownMenuBox>
            </DropDown>

        </TableCenter>
    )
}