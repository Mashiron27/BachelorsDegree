export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {

        // Get prediction results:
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];

        // Set styling: 
        const color = 'lightBlue';
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        // Draw rectangles and text:
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
};

export const Person = (detections) => {
    const count = 0;
    detections.forEach(prediction => {
        if (prediction['class'] == 'person')
        count++;
        if (count > 3) {
            const notification = {
                severity: 'HIGH 10',
                description: 'There cannot be more than 3 people in the room. Found: ' + count
            };
            axios.post('http://localhost:5000/notifications/add', notification)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    });
};