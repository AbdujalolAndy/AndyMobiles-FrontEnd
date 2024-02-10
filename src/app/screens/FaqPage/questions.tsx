import { Box, Stack } from "@mui/material"

const Questions = () => {
    const questions = Array.from({ length: 4 })
    return (
        <Stack flexDirection={"row"} flexWrap={"wrap"} gap={"30px"}>
            {
                questions.map((ele, index) => (
                    <div className="question_item border-0 accordion" id={`accordion${index}`}>
                    <div className="accordion-item">
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
                  </div>
                ))
            }
        </Stack>
    )
}

export default Questions;