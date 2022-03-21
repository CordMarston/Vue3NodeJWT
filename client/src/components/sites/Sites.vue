<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header d-flex flex-row justify-content-between">
                    <div class="w-75">
                        <h4 calss="card-title">
                            Sites
                        </h4>
                        <div class="text-muted d-sm-block d-none">
                            For the cookie bar to work properly each site will need to be added.
                        </div>
                    </div>
                    <div class="w-25 text-end align-self-center" @click="showModalSite">
                        <font-awesome-icon icon="plus" size="lg"/>
                    </div>
                </div>
                <div class="card-body">
                    <div class="alert alert-danger">
                        You do not currently have any sites. Please add one now.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" id="sitesModal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Site</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="alert alert-info">
                    Adding a site will take a few seconds while we scan your site for cookies & scripts.
                </div>
                <div class="input-group mb-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ site.scheme}}</button>
                    <ul class="dropdown-menu">
                        <li><button class="btn" @click="site.scheme='https://';">https://</button></li>
                        <li><button class="btn" @click="site.scheme='http://';">http://</button></li>
                    </ul>
                    <input type="text" class="form-control" placeholder="Website URL" v-model="site.url" @change="sanitizeUrl">
                </div>
                <div class="alert alert-danger" v-if="url_scheme != site.scheme">Just a heads up the URL you pasted has a protocol of <strong>{{ url_scheme }}</strong> but you have selected {{ site.scheme }}</div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addSite">Add & Scan</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Site from '../../models/site.js';
export default {
    name: 'DashboardSites',
    data() {
        return {
            site: new Site('https://', '', ''),
            url_scheme: 'https://'
        }
    },
    methods: {
        addSite()
        {
            this.$store.dispatch('site/create', this.site).then(
                (data) => {
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                }
            )
        },
        showModalSite()
        {
            window.$('#sitesModal').modal('show');
        },
        sanitizeUrl()
        {
            if(this.site.url.search('https://') >= 0)
            {
                this.site.scheme = 'https://';
                this.url_scheme = 'https://';
            } else if(this.site.url.search('http://') >= 0) {
                this.site.scheme = 'http://';
                this.url_scheme = 'http://';
            }
            this.site.url = this.site.url.replace(/^https?:\/\//, '');
            console.log('change');
        }
    }
}
</script>