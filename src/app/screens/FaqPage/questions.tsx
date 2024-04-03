import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"

const Questions = () => {
  //Initializations
  const questions = Array.from({ length: 4 })
  const [loaded, setLoaded] = useState<boolean>(false)

  //React Hook
  useEffect(() => {
    setLoaded(true)
    return () => {
      setLoaded(false)
    }
  }, [])
  return (
    <Stack  >
      {
        questions.map((ele, index: number) => {
          return (
            <Box
              className={loaded ? "question_item border-0 accordion w-100 mb-2 aos-animate" : "question_item border-0 accordion w-100 mb-2"}
              id={`accordion${index}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div
                className="accordion-item"
                style={{ backgroundColor: "#E7F2F8" }}
              >
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                    Accordion Item #1
                  </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse show" data-bs-parent={`#accordion${index}`}>
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </Box>
          )
        })
      }
    </Stack>
  )
}

export default Questions;