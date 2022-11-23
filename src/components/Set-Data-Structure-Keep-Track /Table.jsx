import React, { useState, useMemo, useRef } from "react";
import classes from "./Table.module.css";

const Table = ({issues}) => {
   const topCheckbox = useRef() 
    const [checkedIds, setCheckedIds] = useState(new Set());

    const openIssues = useMemo(
        () => issues.filter((issue) => issue.status === "open"),
        [issues]
    );

     const numOpenIssues = openIssues.length
     const numCheckedIssues = checkedIds.size
     
     const handleOnChange = (id) => {
        const updatedCheckedIds = new Set(checkedIds);
        if (updatedCheckedIds.has(id)) {
            updatedCheckedIds.delete(id);
        } else {
            updatedCheckedIds.add(id);
        }
        setCheckedIds(updatedCheckedIds);

        const updatedNumChecked = updatedCheckedIds.size;
        topCheckbox.current.indeterminate = updatedNumChecked > 0 && updatedNumChecked < numOpenIssues;
     }

     const handleSelectDeselectAll = (event) => {
        if(event.target.checked) {
            const allChecked = new Set(openIssues.map(({id}) => id));
            setCheckedIds(allChecked);
        } else {
            setCheckedIds(new Set());
        }
     }
    
  return (
    <table className={classes.table}>
        <thead>
            <tr>
                <th>
                    <input 
                        ref={topCheckbox} 
                        type="checkbox" 
                        className={classes.checkbox} 
                        checked={numOpenIssues === numCheckedIssues}
                        onChange={handleSelectDeselectAll} 
                    />
                </th>
                <th className={classes.numChecked}>
                    { numCheckedIssues
                        ? `Selected ${numCheckedIssues}`
                        : "None selected"
                    }
                </th>

            </tr>
            <tr>
                <th/>
                <th>Name</th>
                <th>Message</th>
                <th>Status</th>    
            </tr>    
        </thead>
        <tbody>
            {issues.map(({id, name, message, status}) => {
                const isIssueOpen = status === "open";
                return (
                    <tr
                        key={id}
                        className={
                            isIssueOpen ? classes.openIssue : classes.resolvedIssue
                        }
                        style={{ backgroundColor: checkedIds.has(id) ? "#eee" : "#fff" }}
                        >
                        <td>
                            <input
                            type="checkbox"
                            className={classes.checkbox}
                            checked={checkedIds.has(id)}
                            disabled={!isIssueOpen}
                            onChange={() => handleOnChange(id)}
                            />
                        </td>
                        <td>{name}</td>
                        <td>{message}</td>
                        <td>
                            <span
                            className={
                                isIssueOpen ? classes.greenCircle : classes.redCircle
                            }
                            />
                        </td>
                    </tr>
                )
            } )}
        </tbody>    
    </table>
  )
}

export default Table