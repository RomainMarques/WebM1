<template>
    <footer>
        <div class="right">
            <p>Programmé par :</p>
            <ul>
                <li>Antoine Lachaud</li>
                <li>Romain Marques</li>
                <li>Antoine Rincheval</li>
                <li>Jathoosh Thavarasa</li>
            </ul>
        </div>
        <div class="center">
            <p>Informations :
                Jaar is a web application that allows you to plan your trips through SNCF api.
            </p>
        </div>
        <div class="left">
            <p>Liens :</p>
            <ul>
                <li><a href="https://github.com/RomainMarques/WebM1">Github</a></li>
                <li><a href="https://www.sncf.com/fr">SNCF</a></li>
            </ul>
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
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-top: 1px solid #ccc;
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
}

</style>