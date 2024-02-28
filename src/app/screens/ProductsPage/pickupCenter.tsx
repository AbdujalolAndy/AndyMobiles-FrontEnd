import { Box, Stack } from "@mui/material"

const PickUpCenter = () => {
    return (
        <Box>
            <div className="fw-bold fs-3 text-center pt-3 pb-3">Visit Our Self-Pickup Center</div>
            <Stack alignItems={"center"} className="pb-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43884.90656420995!2d129.03825445776852!3d35.162476233084554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb143f18ce4d%3A0xa9bfed487f2b6c5!2z7JWE7J207Iqk7Yag7Ja0IOu2gOyCsOuzuOygkA!5e0!3m2!1sen!2skr!4v1709002734909!5m2!1sen!2skr"
                    width="100%"
                    height="450"
                    loading="lazy"
                    style={{borderRadius:"10px", boxShadow:"0 0 10px black"}}
                ></iframe>
            </Stack>
        </Box>
    )
}

export default PickUpCenter