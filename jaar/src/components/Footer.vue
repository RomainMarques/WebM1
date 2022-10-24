<template>
    <footer>
        <div class="right">
            <p class="p_info">Coded by</p>
            <div>Antoine Lachaud</div>
            <div>Romain Marques</div>
            <div>Antoine Rincheval</div>
            <div>Jathoosh Thavarasa</div>
        </div>
        <div class="center">
            <p>Information:
                Jaar is a web application that allows you to plan your trips through the SNCF API.
            </p>
        </div>
        <div class="left">
            <p class="p_info">Links</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RomainMarques/WebM1">Github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.sncf.com/fr">SNCF</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-vue"
}
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: rgba(189, 189, 189, 0.5);
    color: black;
    border-top: 1px solid #ccc;
    margin-top: 1em;
}

.right, .center, .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.right ul li, .left ul li {
    margin-bottom: 10px;
}

.right ul li:last-child, .left ul li:last-child {
    margin-bottom: 0;
}

.center p {
    text-align: center;
    font-style: italic;
}

.p_info {
    font-weight: bold;
}

a {
    color: grey;
}
</style>