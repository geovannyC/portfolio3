import dynamic from "next/dynamic";

const DinamicIcons = ({ library, tag }) => {
    const Icon = dynamic(async () => {
        const WarningResult = await import(
            "@styled-icons/material-rounded/Warning"
        ).then((res) => res.Warning);
        if (library === "boxicons") {
            const result = await import("@styled-icons/boxicons-logos").then(
                (res) => res[tag]
            );
            return result || WarningResult;
        }
        if (library === "boxicons-regular") {
            const result = await import("@styled-icons/boxicons-regular").then(
                (res) => res[tag]
            );
            return result || WarningResult;
        }
        return WarningResult;
    });
    return <Icon />;
};
export default DinamicIcons;