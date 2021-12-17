import styles from '../../styles/Home.module.css';
import formStyles from '../admin/formStyles.module.css';

export default function CreatePage() {
    const addPageLink = async (event)=>{
        event.preventDefault();
        let message = '';
        const messageDiv = document.getElementById("Message")
        const res = await fetch('/api/pages', {
            body: JSON.stringify({
                title: event.target.title.value,
                path: `/${event.target.path.value}`,
                imageURL: `/images/${event.target.imageURL.value}`
            }),
            headers: {'Content-Type': 'application/json' },
            method: 'POST'
        });
        const result = await res.json();
        if(result.success){
            message = 'Page Link Saved.';
            messageDiv.innerText = message;
            event.target.title.value = "";
            event.target.path.value = "";
            event.target.imageURL.value = "";
        } else {
            message = result.error;
            messageDiv.innerText = message;
        } 
    }
    return (
        <div className={styles.container}>
            <div className={formStyles.formDiv}>
                <div id="Message" className={formStyles.message}></div>
                <form className={formStyles.formBody} onSubmit={addPageLink}>
                    <h1>Create Page Link</h1>
                    <div className={formStyles.formInput}>
                        <label htmlFor="title">Title</label>
                        <input id="title" name="title" type="text" autoComplete="title" required />
                    </div>
                    <div className={formStyles.formInput}>
                        <label htmlFor="path">Path</label>
                        <input id="path" name="path" type="text" autoComplete="path" required />
                    </div>
                    <div className={formStyles.formInput}>
                        <label htmlFor="imageURL">Image URL</label>
                        <input id="imageURL" name="imageURL" type="text" autoComplete="imageURL" />
                    </div>
                    <button type="submit">Add Page Link</button>
                </form>
            </div>
        </div>
    )
}